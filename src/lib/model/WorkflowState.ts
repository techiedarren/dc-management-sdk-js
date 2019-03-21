import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';

/**
 * Class representing the [Workflow State](https://api.amplience.net/v2/content/docs/api/index.html#resources-workflows) resource.
 */
export class WorkflowState extends HalResource {
  /**
   * Unique id generated on creation
   */
  public id?: string;

  /**
   * Friendly label for the workflow state
   */
  public label?: string;

  /**
   * Display color associated with the workflow state
   */
  public color?: string;

  /**
   * Id of the user responsible for originally creating the content item
   */
  public createdBy?: string;

  /**
   * Timestamp representing when the content item was originally created in ISO 8601 format
   */
  public createdDate?: string;

  /**
   * Id of the user responsible for the last update to the content item
   */
  public lastModifiedBy?: string;

  /**
   * Timestamp representing when the content item was last updated in ISO 8601 format
   */
  public lastModifiedDate?: string;

  /**
   * Resources and actions related to a Workflow State
   */
  public readonly related = {};
}

/**
 * @hidden
 */
export class WorkflowStatePage extends Page<WorkflowState> {
  constructor(data?: any) {
    super('workflow-states', WorkflowState, data);
  }
}
