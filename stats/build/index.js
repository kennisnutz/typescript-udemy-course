"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const summary = Summary_1.Summary.winsAnalysisAndHtmlReport('Arsenal');
csvFileReader.read();
summary.buildAndPrintReport(csvFileReader.data);
