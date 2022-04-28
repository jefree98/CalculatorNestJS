import { Test, TestingModule } from '@nestjs/testing';
import { SubtractService } from './subtract.service';

describe('SubtractService', () => {
  let service: SubtractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtractService],
    }).compile();

    service = module.get<SubtractService>(SubtractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
