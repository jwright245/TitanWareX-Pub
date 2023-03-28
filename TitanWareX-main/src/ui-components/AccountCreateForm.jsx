/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AccountCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    username: "",
    phoneNum: "",
    first: "",
    last: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [username, setUsername] = React.useState(initialValues.username);
  const [phoneNum, setPhoneNum] = React.useState(initialValues.phoneNum);
  const [first, setFirst] = React.useState(initialValues.first);
  const [last, setLast] = React.useState(initialValues.last);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmail(initialValues.email);
    setUsername(initialValues.username);
    setPhoneNum(initialValues.phoneNum);
    setFirst(initialValues.first);
    setLast(initialValues.last);
    setErrors({});
  };
  const validations = {
    email: [{ type: "Required" }, { type: "Email" }],
    username: [{ type: "Required" }],
    phoneNum: [],
    first: [],
    last: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          username,
          phoneNum,
          first,
          last,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Account(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountCreateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              username,
              phoneNum,
              first,
              last,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              username: value,
              phoneNum,
              first,
              last,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Phone num"
        isRequired={false}
        isReadOnly={false}
        value={phoneNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              username,
              phoneNum: value,
              first,
              last,
            };
            const result = onChange(modelFields);
            value = result?.phoneNum ?? value;
          }
          if (errors.phoneNum?.hasError) {
            runValidationTasks("phoneNum", value);
          }
          setPhoneNum(value);
        }}
        onBlur={() => runValidationTasks("phoneNum", phoneNum)}
        errorMessage={errors.phoneNum?.errorMessage}
        hasError={errors.phoneNum?.hasError}
        {...getOverrideProps(overrides, "phoneNum")}
      ></TextField>
      <TextField
        label="First"
        isRequired={false}
        isReadOnly={false}
        value={first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              username,
              phoneNum,
              first: value,
              last,
            };
            const result = onChange(modelFields);
            value = result?.first ?? value;
          }
          if (errors.first?.hasError) {
            runValidationTasks("first", value);
          }
          setFirst(value);
        }}
        onBlur={() => runValidationTasks("first", first)}
        errorMessage={errors.first?.errorMessage}
        hasError={errors.first?.hasError}
        {...getOverrideProps(overrides, "first")}
      ></TextField>
      <TextField
        label="Last"
        isRequired={false}
        isReadOnly={false}
        value={last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              username,
              phoneNum,
              first,
              last: value,
            };
            const result = onChange(modelFields);
            value = result?.last ?? value;
          }
          if (errors.last?.hasError) {
            runValidationTasks("last", value);
          }
          setLast(value);
        }}
        onBlur={() => runValidationTasks("last", last)}
        errorMessage={errors.last?.errorMessage}
        hasError={errors.last?.hasError}
        {...getOverrideProps(overrides, "last")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
