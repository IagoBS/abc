/**
 * Contract source: https://git.io/JvyKD
 *
 * Feel free to let us know via PR, if you find something broken in this
 * file.
 */

import User from 'App/Models/User'
import { SessionGuardConfig } from '@ioc:Adonis/Addons/Auth'
import { SessionDriverContract } from '@ioc:Adonis/Addons/Session'

declare module '@ioc:Adonis/Addons/Auth' {
  /*
  |--------------------------------------------------------------------------
  | Providers
  |--------------------------------------------------------------------------
  |
  | The providers are used to fetch users. The Auth module comes pre-bundled
  | with two providers that are `Lucid` and `Database`. Both uses database
  | to fetch user details.
  |
  | You can also create and register your own custom providers.
  |
  */
  interface ProvidersList {

    user: {
      implementation: LucidProviderContract<typeof User>,
      config: LucidProviderConfig<typeof User>,
    },
  }

  /*
  |--------------------------------------------------------------------------
  | Guards
  |--------------------------------------------------------------------------
  |
  | The guards are used for authenticating users using different drivers.
  | The auth module comes with 4 different guards.
  |
  | - SessionGuardContract
  | - BasicAuthGuardContract
  | - JwtGuardContract
  | - OATGuardContract ( Opaque access token )
  |
  | Every guard needs a provider for looking up users from the database.
  |
  */
  interface GuardsList {
    web: {
      implementation: SessionDriverContract<'user', 'web'>,
      config: SessionGuardConfig<'user'>,
    },
  }
}
