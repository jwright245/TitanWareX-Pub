/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SquareDropdownOverridesProps = {
    SquareDropdown?: PrimitiveOverrideProps<FlexProps>;
    h3?: PrimitiveOverrideProps<TextProps>;
    "icn arrow-down .icn-sm"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SquareDropdownProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SquareDropdownOverridesProps | undefined | null;
}>;
export default function SquareDropdown(props: SquareDropdownProps): React.ReactElement;
