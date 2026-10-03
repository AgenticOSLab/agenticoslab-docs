
MAKEFILE_LIST = Makefile

# NOTE: самодокументирование команд makefile
help: ## help - отображение списка доступных команд
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

docmd_dev: ## 	docmd_dev - разработка документации
	npx @docmd/core dev
