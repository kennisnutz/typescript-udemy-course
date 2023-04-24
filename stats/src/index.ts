import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const summary = Summary.winsAnalysisAndHtmlReport('Arsenal');
csvFileReader.read();
summary.buildAndPrintReport(csvFileReader.data);
