import { mergeTypeDefs } from '@graphql-tools/merge'

import userTypes from './user'

export default mergeTypeDefs([userTypes])
