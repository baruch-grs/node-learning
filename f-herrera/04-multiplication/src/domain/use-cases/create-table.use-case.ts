export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /**
     * Nos va a ayudar a inyectar dependencias
     */
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
