/**
 * Config source: https://git.io/JvyKy
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import User from 'App/Models/User'
import { AuthConfig } from '@ioc:Adonis/Addons/Auth'
import { SessionGuardConfig } from '@ioc:Adonis/Addons/Auth'
import { SessionDriverContract } from '@ioc:Adonis/Addons/Session'

/*
|--------------------------------------------------------------------------
| Authentication Mapping
|--------------------------------------------------------------------------
|
| List of available authentication mapping. You must first define them
| inside the `contracts/auth.ts` file before mentioning them here.
|
*/
interface GuardList {
  web: {
    implementation: SessionGuardContract<'user', 'web'>
    config: SessionGuardConfig<'user'>,
  },
}
const authConfig: AuthConfig = {
  guard: keyof GuardsList,
  list: {
    web: SessionGuardConfig<"user">
  },
}

export default authConfig
