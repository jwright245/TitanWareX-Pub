/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchWithFilterOverridesProps = {
    SearchWithFilter?: PrimitiveOverrideProps<ViewProps>;
    "input-group"?: PrimitiveOverrideProps<ViewProps>;
    "form-control input-style-1"?: PrimitiveOverrideProps<ViewProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
    "input-group-append141553"?: PrimitiveOverrideProps<ViewProps>;
    dropdown?: PrimitiveOverrideProps<ViewProps>;
    "dropdown-toggle"?: PrimitiveOverrideProps<ViewProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "input-group-append141558"?: PrimitiveOverrideProps<ViewProps>;
    "btn "?: PrimitiveOverrideProps<ViewProps>;
    "icn search .icn-xs"?: PrimitiveOverrideProps<ViewProps>;
    vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchWithFilterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchWithFilterOverridesProps | undefined | null;
}>;
export default function SearchWithFilter(props: SearchWithFilterProps): React.ReactElement;
