APP_NAME=snippets.dev
WEB_PORT=3000
DB_PORT=5555
BASE_URL=http://localhost:

list:
	@echo "Commands:"
	@echo "  🔄 list - list the commands"
	@echo "  🔄 first-time - first time setup"
	@echo "  🚀 run - run the web app"
	@echo "  🔨 build - build the web app"
	@echo "  🌐 open - open the web app"
	@echo "  💾 studio - open the prisma studio"
	@echo "  🔄 migrate - migrate the database"
	@echo "  🔄 generate - generate the prisma client"
	@echo "  🐳 up - up the docker compose"
	@echo "  🐳 down - down the docker compose"

first-time:
	pnpm install
	make gemerate
	make up

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

up:
	docker compose up -d

down:
	docker compose down

.PHONY: run build open studio migrate generate up down
