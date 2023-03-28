/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportCardOverridesProps = {
    SupportCard?: PrimitiveOverrideProps<FlexProps>;
    "icn resize icn-lg"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    div?: PrimitiveOverrideProps<FlexProps>;
    h6151507?: PrimitiveOverrideProps<TextProps>;
    h5?: PrimitiveOverrideProps<TextProps>;
    "button.primary-color.btn-outline.btn-sm"?: PrimitiveOverrideProps<FlexProps>;
    h6151511?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SupportCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SupportCardOverridesProps | undefined | null;
}>;
export default function SupportCard(props: SupportCardProps): React.ReactElement;
