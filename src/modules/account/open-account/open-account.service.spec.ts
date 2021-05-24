import { Test, TestingModule } from '@nestjs/testing';
import { OpenAccountService } from './open-account.service';

describe('OpenAccountService', () => {
  let service: OpenAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenAccountService],
    }).compile();

    service = module.get<OpenAccountService>(OpenAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
