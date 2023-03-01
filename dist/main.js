"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const pipes_1 = require("@nestjs/common/pipes");
const ws_exception_filter_1 = require("./websockets/ws-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new pipes_1.ValidationPipe());
    app.useGlobalFilters(new ws_exception_filter_1.WebsocketsExceptionFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map