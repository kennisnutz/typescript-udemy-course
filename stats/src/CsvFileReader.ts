import fs from 'fs';
import { MatchData } from './MatchData';

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string) => {
        return row.split(',');
      });
  }
}
