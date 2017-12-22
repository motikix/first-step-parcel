import sum from './calc';
import Person from './Person';
import './css/main.css';

console.log('hello world');

console.log(sum(1, 2, 3, 4, 5));

const taro = new Person('Taro', '20');

console.log(taro.introduce());
