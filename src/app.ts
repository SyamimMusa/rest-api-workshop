import express from 'express';
import { MongoClient } from 'mongodb';
import config from '~config';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
