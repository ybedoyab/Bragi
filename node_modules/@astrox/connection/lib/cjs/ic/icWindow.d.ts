import { EventHandler } from '../types';
export declare class ICWindow {
    protected _window?: Window;
    protected _eventHandler?: EventHandler;
    protected _removeEventListener(): void;
    protected _openWindow(url: string, target?: string, feature?: string): void;
    protected _remove(): void;
}
