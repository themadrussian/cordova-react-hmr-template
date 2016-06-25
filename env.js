'use strict';

const TARGET = process.env.npm_lifecycle_event;
let env = 'build';

switch (TARGET) {
	case 'start':
	case 'ios':
			env = 'development';
	case 'android':
		env = 'development';
}

module.exports = env;
