import { TestBed } from '@angular/core/testing';

import { CodewarsLeaderboardService } from './codewars-leaderboard.service';

describe('CodewarsLeaderboardService', () => {
  let service: CodewarsLeaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodewarsLeaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
