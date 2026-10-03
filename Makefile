
MAKEFILE_LIST = Makefile

# NOTE: самодокументирование команд makefile
help: ## help - отображение списка доступных команд
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

js2json: ## js2json - конвертер docmd.config.js в docmd.config.json для деплоя
	node ./scripts/docmd_js_to_json.js docmd.config.js docmd.config.json
docmd_dev: ## 	docmd_dev - разработка документации
	npx @docmd/core dev
