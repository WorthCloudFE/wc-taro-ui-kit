/// <reference types="react" />
import "./WCEmpty.scss";
declare type EmptyProps = {
    tip: string;
    slot?: any;
};
/**
 * 空数据
 * @returns
 */
declare const Empty: (props: EmptyProps) => JSX.Element;
export default Empty;
