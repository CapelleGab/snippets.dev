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
	pnpm dlx prisma studio && open $(BASE_URL)$(DB_PORT)

migrate:
	pnpm dlx prisma migrate dev

generate:
	pnpm dlx prisma generate

# TODO: add docker compose commands
up:
	docker compose up -d

down:
	docker compose down

.PHONY: run build open studio migrate generate up down