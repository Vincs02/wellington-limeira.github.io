# Como publicar o portfólio do Wellington no GitHub

## Opção 1: Repositório novo para Wellington (recomendado)

1. Crie um novo repositório no GitHub em [github.com/new](https://github.com/new):
   - Nome: `wellington-limeira.github.io` (para site em `https://wellington-limeira.github.io`)
   - OU qualquer nome: `portfolio-wellington` (site em `https://seu-usuario.github.io/portfolio-wellington`)

2. Abra o terminal nesta pasta e execute:

   ```bash
   git remote set-url origin https://github.com/USUARIO/NOME-DO-REPO.git
   git add .
   git commit -m "Portfólio Wellington Limeira Santos"
   git push -u origin main
   ```

   (Troque `USUARIO` e `NOME-DO-REPO` pelo usuário e nome do repositório)

3. No GitHub, vá em **Settings** > **Pages**:
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**

4. O site será publicado automaticamente. Aguarde 1–2 minutos e acesse:
   - `https://wellington-limeira.github.io` (se usou esse nome)
   - ou `https://seu-usuario.github.io/portfolio-wellington` (exemplo)

## Opção 2: Repositório já existente

Se o repositório já existe e está conectado:

```bash
git add .
git commit -m "Portfólio Wellington Limeira Santos"
git push origin main
```

Depois, em **Settings** > **Pages**, escolha **Source: GitHub Actions**.

---

**Dica:** Se o Wellington tiver conta no GitHub, crie o repo na conta dele e o site ficará em `https://wellington-limeira.github.io`.
