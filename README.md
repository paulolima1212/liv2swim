# Liv2swim — landing page

Site público da escola de natação Liv2swim (Sydney). Apresenta o método e os depoimentos e leva o visitante para a aula teste grátis na [`liv2swim_school`](../liv2swim_school).

## Stack

- Vite 7, React 19, TypeScript
- Tailwind CSS 4, Framer Motion, Lucide
- Textos em português e inglês (`src/i18n/translations.ts`)

## Como rodar

```bash
cp .env.example .env
npm install
npm run dev
```

O Vite sobe com `--host`. Scripts: `dev`, `build`, `preview`, `lint`.

## O que a página faz

Página única: navegação, hero, diferenciais, depoimentos, carrossel, chamada para a aula teste e rodapé. O chat Tawk.to está no `index.html`.

O convite da página é a aula teste grátis. Estes pontos usam `VITE_SCHOOL_TRIAL_URL`. Sem a variável, o destino é `https://liv2swim.lz-plima1212.online/`. Com a página rodando neste servidor, o `.env` aponta para `https://liv2swim-tst.lz-plima1212.online/`:

- botão do menu
- botão principal do hero
- botão principal da seção final
- link “Aula teste grátis” no rodapé

O botão “Tirar dúvidas” continua abrindo o chat. Não há formulário nem backend neste repositório.

## Integração com a liv2swim_school

A landing só encaminha para a escola:

- produção: `https://liv2swim.lz-plima1212.online/`
- teste, quando a landing roda neste servidor: `https://liv2swim-tst.lz-plima1212.online/`

Criar conta e agendar a aula teste acontece nesse endereço. O cadastro de aluno ainda é por convite da equipe ([ADR 010](../liv2swim_school/docs/adr/010-student-invite-access.md)). Agenda e compra de pacotes que já existem (`/my-classes`, `/purchase`) continuam depois do login.
