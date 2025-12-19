# Guia de Deploy no Hostinger

Este guia explica como fazer o deploy do seu site React no Hostinger.

## Pré-requisitos

1. Conta no Hostinger ativa
2. Domínio configurado (ou subdomínio)
3. Acesso ao painel de controle (hPanel) da Hostinger

## Passo 1: Gerar o Build do Projeto

Antes de fazer o upload, você precisa gerar os arquivos de produção:

```bash
npm run build
```

Isso criará uma pasta `dist` com todos os arquivos estáticos otimizados para produção.

## Passo 2: Acessar o File Manager

1. Faça login no **hPanel** da Hostinger
2. Vá em **Arquivos** → **Gerenciador de Arquivos**
3. Navegue até a pasta `public_html` (ou a pasta do seu domínio/subdomínio)

## Passo 3: Limpar a Pasta (se necessário)

Se houver arquivos antigos na pasta `public_html`, você pode:
- Fazer backup primeiro (recomendado)
- Ou deletar todos os arquivos existentes

## Passo 4: Fazer Upload dos Arquivos

Você tem duas opções:

### Opção A: Upload via File Manager (Interface Web)

1. No File Manager, clique em **Upload**
2. Selecione todos os arquivos da pasta `dist` do seu projeto
3. Aguarde o upload completar

### Opção B: Upload via FTP (Mais Rápido)

1. Instale um cliente FTP (FileZilla, WinSCP, etc.)
2. Use as credenciais FTP fornecidas pela Hostinger:
   - **Host**: ftp.seusite.com (ou o IP fornecido)
   - **Usuário**: seu usuário FTP
   - **Senha**: sua senha FTP
   - **Porta**: 21 (ou 22 para SFTP)
3. Conecte-se e navegue até `public_html`
4. Faça upload de todos os arquivos da pasta `dist`

## Passo 5: Verificar a Estrutura de Arquivos

Após o upload, a estrutura na pasta `public_html` deve ser:

```
public_html/
├── index.html
├── favicon.png
├── robots.txt
├── sitemap.xml
└── assets/
    ├── (todos os arquivos CSS, JS e imagens)
```

## Passo 6: Configurar o .htaccess

O arquivo `.htaccess` já foi criado no projeto e deve estar na pasta `dist`. Ele é essencial para:
- Redirecionar todas as rotas para `index.html` (necessário para SPAs React)
- Configurar compressão GZIP
- Configurar cache de arquivos estáticos

**Importante**: Certifique-se de que o arquivo `.htaccess` foi enviado junto com os outros arquivos. Alguns clientes FTP ocultam arquivos que começam com ponto (.). No FileZilla, vá em **Servidor** → **Forçar exibição de arquivos ocultos**.

## Passo 7: Verificar Permissões

No File Manager da Hostinger:
1. Selecione a pasta `public_html`
2. Clique com botão direito → **Alterar Permissões**
3. Defina como **755** para pastas e **644** para arquivos

## Passo 8: Testar o Site

1. Acesse seu domínio no navegador
2. Teste todas as rotas e funcionalidades
3. Verifique se as imagens e assets estão carregando corretamente

## Solução de Problemas

### Problema: Página em branco
- Verifique se o arquivo `index.html` está na raiz de `public_html`
- Verifique se o `.htaccess` está presente e configurado corretamente
- Verifique os logs de erro no hPanel

### Problema: Rotas não funcionam (404)
- Certifique-se de que o arquivo `.htaccess` está presente
- Verifique se o módulo `mod_rewrite` está habilitado (geralmente está por padrão)

### Problema: Assets não carregam
- Verifique se a pasta `assets` foi enviada completamente
- Verifique os caminhos no console do navegador (F12)
- Certifique-se de que os caminhos estão relativos (começam com `/`)

### Problema: Site muito lento
- Ative o cache no hPanel (se disponível)
- Verifique se a compressão GZIP está funcionando
- Considere usar um CDN

## Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código local
2. Execute `npm run build` novamente
3. Faça upload apenas dos arquivos alterados (ou todos, se preferir)
4. Limpe o cache do navegador para ver as mudanças

## Dicas Adicionais

- **Backup**: Sempre faça backup antes de fazer upload de novos arquivos
- **Versionamento**: Considere usar Git para controlar versões
- **SSL**: Certifique-se de que o certificado SSL está ativado no hPanel
- **Performance**: Ative o cache do navegador e compressão no hPanel

## Suporte

Se encontrar problemas, entre em contato com o suporte da Hostinger ou consulte a documentação deles sobre hospedagem de sites estáticos.

