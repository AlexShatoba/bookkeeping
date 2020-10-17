import { environment } from '../../../environments/environment';

/**
 * App config model.
 */
export class AppConfig {
  /**
   * API base endpoint URL.
   */
  public apiEndpoint = environment.apiEndpoint;

  /**
   * Assets base endpoint URL.
   */
  public assetsEndpoint = environment.assetsEndpoint;

}
