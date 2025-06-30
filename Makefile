APP_NAME=snippets.dev
WEB_PORT=3000
DB_PORT=5555
BASE_URL=http://localhost:

run:
	pnpm dev

build:
	pnpm build

open:
	open $(BASE_URL)$(WEB_PORT)

studio:
	npx prisma studio && open $(BASE_URL)$(DB_PORT)

migrate:
	npx prisma migrate dev

# TODO: add docker compose commands
