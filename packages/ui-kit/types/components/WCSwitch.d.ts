/// <reference types="react" />
import { ViewProps } from "@tarojs/components/types/View";
export declare type WCSwitchProps = {
    value?: boolean;
    onChange?: (value: boolean) => void;
    disable?: boolean;
} & Pick<ViewProps, "className">;
export default function WCSwitch(props: WCSwitchProps): JSX.Element;
