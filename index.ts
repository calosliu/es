#!/usr/bin/env node

import { Api } from './api';

import commander = require('commander');

const program = new commander.Command();
const api = new Api();

program.version('0.0.1').option('-t --test', 'test', api.test('test'));
