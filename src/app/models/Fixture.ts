import { Team } from './Team';

export interface Fixture {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  location: string;
  homePoints: number;
  awayPoints: number;
  date: string;
}
