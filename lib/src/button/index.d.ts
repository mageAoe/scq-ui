import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
declare const Button: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        values: string[];
    };
    size: {
        type: StringConstructor;
        values: string[];
    };
    text: {
        type: StringConstructor;
        values: string;
    };
}, {
    styleClass: import("vue").ComputedRef<{
        [x: string]: any;
        'is-plain': any;
        'is-round': any;
        'is-disabled': any;
    }>;
    text: string | undefined;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        values: string[];
    };
    size: {
        type: StringConstructor;
        values: string[];
    };
    text: {
        type: StringConstructor;
        values: string;
    };
}>>, {}>>;
export default Button;
