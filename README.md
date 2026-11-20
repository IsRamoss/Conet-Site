# conet — Conectando empresas ao mundo

Site institucional estático (HTML + CSS + JavaScript puro).

## Estrutura

```
conet/
├── index.html
├── style.css
├── script.js
├── .nojekyll
├── README.md
└── assets/
    ├── servico-manutencao-cftv.jpg
    ├── servico-rede-rack.jpg
    ├── servico-cftv.jpg
    ├── servico-diagnostico-pc.jpg
    └── equipe/
        ├── avatar-padrao.svg        (aparece quando a foto ainda não existe)
        ├── gerente-ti.jpg
        ├── gerente-administrativo.jpg
        ├── gerente-comunicacao.jpg
        ├── gerente-materiais.jpg
        ├── gerente-projeto.jpg
        ├── gerente-ia.jpg
        ├── colaborador.jpg
        └── lider.jpg
```

> As fotos da equipe ainda não vêm no projeto: adicione os 8 arquivos `.jpg` em `assets/equipe/` com exatamente esses nomes.

## Como trocar as fotos e nomes da equipe

1. Salve a foto (JPG, de preferência quadrada, até ~500 KB) em `assets/equipe/` com o nome indicado acima.
2. No `index.html`, procure `Nome do Participante` e troque pelo nome real.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `conet-site`) e envie **todo o conteúdo desta pasta** para a raiz dele, mantendo a pasta `assets/`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
4. Aguarde 1 a 2 minutos. O site ficará em `https://SEU-USUARIO.github.io/conet-site/`.

Para atualizar o site depois, basta enviar os arquivos alterados (commit) na branch `main`.

## Domínio próprio (opcional)

Em **Settings → Pages → Custom domain**, informe o domínio e crie o registro DNS indicado pelo GitHub.
