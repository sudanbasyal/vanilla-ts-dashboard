export interface RouteComponent {
  load: () => Promise<string>;
  initEventListeners: () => void;
}
