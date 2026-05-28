#!/bin/bash

# =====================================================================
# SCRIPT DE AUTOMAÇÃO DE DEPLOY E MONITORAMENTO - FATEC
# Objetivo: Validar ambiente Linux, buildar Docker e orquestrar K8s
# =====================================================================

# Cores para deixar o terminal bonito na apresentação
VERDE='\033[0;32m'
AZUL='\033[0;34m'
VERMELHO='\033[0;31m'
SEM_COR='\033[0m'

echo -e "${AZUL}=== [Iniciando Automação DevOps no Linux] ===${SEM_COR}"

# 1. Verificação de Saúde do Sistema Operacional (Requisito de S.O.)
echo -e "\n${AZUL}[1/4] Analisando recursos do Servidor Linux...${SEM_COR}"
echo "--------------------------------------------------"
echo "Uso de Memória RAM atual:"
free -h
echo "--------------------------------------------------"
echo "Espaço em Disco disponível:"
df -h / | awk 'NR==2 {print "Total: " $2 " | Disponível: " $4 " | Uso: " $5}'
echo "--------------------------------------------------"

# 2. Validação das Ferramentas DevOps
echo -e "\n${AZUL}[2/4] Validando dependências do ambiente...${SEM_COR}"
if ! command -v docker &> /dev/null; then
    echo -e "${VERMELHO}[ERRO] Docker não está instalado neste ambiente Linux.${SEM_COR}"
    exit 1
else
    echo -e "${VERDE}[OK] Docker detectado: $(docker --version)${SEM_COR}"
fi

if ! command -v kubectl &> /dev/null; then
    echo -e "${VERMELHO}[AVISO] Kubectl não detectado. Pulando etapa de cluster.${SEM_COR}"
    K8S_READY=false
else
    echo -e "${VERDE}[OK] Kubectl detectado: $(kubectl version --client --short 2>/dev/null || echo "Instalado")${SEM_COR}"
    K8S_READY=true
fi

# 3. Automação do Build do Docker Container
# Ajustado para refletir a tecnologia real do seu Dockerfile (Node + Nginx)
echo -e "\n${AZUL}[3/4] Iniciando Build da imagem Docker (Node + Nginx Alpine)...${SEM_COR}"
IMAGE_NAME="marcellegg/projeto-integrador-devops:latest"

docker build -t $IMAGE_NAME .

if [ $? -eq 0 ]; then
    echo -e "${VERDE}[SUCESSO] Imagem Docker buildada com sucesso!${SEM_COR}"
else
    echo -e "${VERMELHO}[ERRO] Falha ao buildar a imagem Docker.${SEM_COR}"
    exit 1
fi

# 4. Orquestração e Deploy no Kubernetes
if [ "$K8S_READY" = true ]; then
    echo -e "\n${AZUL}[4/4] Aplicando manifestos no cluster Kubernetes...${SEM_COR}"
    
    # Aplica o arquivo que criamos no passo anterior
    kubectl apply -f k8s/deployment.yaml
    
    echo -e "\n${VERDE}=== [DEPLOY FINALIZADO COM SUCESSO] ===${SEM_COR}"
    echo -e "Acesse o dashboard pela porta do nó: ${AZUL}http://localhost:30080${SEM_COR}"
    
    echo -e "\nStatus dos Pods no Cluster:"
    kubectl get pods -l app=dashboard-monitoramento
else
    echo -e "\n${VERDE}=== [PROCESSO PARCIAL CONCLUÍDO] ===${SEM_COR}"
    echo -e "Imagem Docker gerada localmente no Linux. Pronto para o registro.${SEM_COR}"
fi