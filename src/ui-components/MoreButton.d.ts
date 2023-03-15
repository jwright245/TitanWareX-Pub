/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MoreButtonOverridesProps = {
    MoreButton?: PrimitiveOverrideProps<FlexProps>;
    "btn-text"?: PrimitiveOverrideProps<TextProps>;
    "icn arrow-right .icn-xs"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MoreButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MoreButtonOverridesProps | undefined | null;
}>;
export default function MoreButton(props: MoreButtonProps): React.ReactElement;
