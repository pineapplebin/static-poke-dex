declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    // If you want to use on:beforeinstallprompt
    // onbeforeinstallprompt?: (event: any) => any;
    // If you want to use myCustomAttribute={..} (note: all lowercase)
    // mycustomattribute?: any;
    // You can replace any with something more specific if you like
    ondraggable?: (event: { detail: { x: number; y: number } }) => any;
    ondraggablestart?: (event: { detail: { x: number; y: number } }) => any;
    ondraggableend?: () => any;
  }
}
