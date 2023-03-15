/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubscribeOverridesProps = {
    Subscribe?: PrimitiveOverrideProps<ViewProps>;
    "form-text"?: PrimitiveOverrideProps<TextProps>;
    "input-group"?: PrimitiveOverrideProps<ViewProps>;
    "form-control input-style-1"?: PrimitiveOverrideProps<ViewProps>;
    "Your Email"?: PrimitiveOverrideProps<TextProps>;
    "input-group-append"?: PrimitiveOverrideProps<ViewProps>;
    btn?: PrimitiveOverrideProps<ViewProps>;
    "input-group-text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SubscribeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SubscribeOverridesProps | undefined | null;
}>;
export default function Subscribe(props: SubscribeProps): React.ReactElement;
