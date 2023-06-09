import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from 'all:part:@sanity/base/schema-type';

import restaurant from './restaurant';

import category from './category';

import dish from './dish';

import featured from './featured'

export default createSchema({
    name: 'default',

    types: schemaType.concat([
        restaurant,
        category,
        dish,
        featured,
    ]),
})