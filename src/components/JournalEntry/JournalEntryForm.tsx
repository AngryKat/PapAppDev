import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Keyboard, Pressable, StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { AppActivityIndicator, AppButton } from "@/components/ui";
import { AppTextInput } from "@/components/form";
import { DateCalendarSelector } from "../DateCalendarSelector";
import { ControlledInput } from "../form/ControlledInput";

const ControlledAppTextInput = ControlledInput(AppTextInput);
const ControlledDateCalendarSelector = ControlledInput(DateCalendarSelector);

const defaultValues = {
  content: "",
  date: new Date(),
  id: "fwanfkwg" + Math.random(),
  title: "",
};

type JournalForm = {
  content: string;
  date: Date;
  id: string;
  title: string;
};

export function JournalEntryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { entryId, initialDate } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, isDirty },
  } = useForm<JournalForm>({
    defaultValues,
  });

  // useEffect(() => {
  //   if (!entryId && initialDate) {
  //     setValue("date", new Date(JSON.parse(initialDate as string)));
  //     return;
  //   }
  //   const getEntry = async () => {
  //     const entry = await fetchEntryById(entryId as string);
  //     if (entry) reset(entry);
  //   };
  //   getEntry();
  // }, [entryId, initialDate]);

  const handleCancel = () => {
    if (!isDirty) {
      router.back();
      return;
    }
    Alert.alert(
      "Cancel changes?",
      "Any changes you have made will not be saved and you will be returned to the previous screen.\n Are you sure you want to proceed?",
      [
        { text: "Yes", onPress: () => router.back() },
        {
          text: "No",
          style: "cancel",
        },
      ]
    );
  };

  const onSubmit = async (data: JournalForm) => {
    // let error = false;
    // setIsSubmitting(true);

    // try {
    //   const submitTime = new Date();
    //   const dateWithSubmitTime = new Date(data.date);
    //   dateWithSubmitTime.setHours(submitTime.getHours());
    //   dateWithSubmitTime.setMinutes(submitTime.getMinutes());
    //   dateWithSubmitTime.setSeconds(submitTime.getSeconds());

    //   if (entryId) {
    //     await updateJournalEntry(entryId as string, {
    //       ...data,
    //       date: dateWithSubmitTime,
    //     });
    //   } else {
    //     await createJournalEntry("dq0TFIj4nh2980kC1zBT", {
    //       ...data,
    //       date: dateWithSubmitTime,
    //     });
    //   }
    // } catch (e) {
    //   console.error("submit failed", e);
    //   error = true;
    // }
    // setTimeout(async () => {
    //   setIsSubmitting(false);
    //   if (error) {
    //     Alert.alert(
    //       "Error while saving changes",
    //       "Some error occurred while trying to save changes. Please try again later."
    //     );
    //   }
    // }, 700);
    router.back();
  };
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Controller
        control={control}
        name="date"
        render={ControlledDateCalendarSelector}
      />
      <View style={styles.textInputsContainer}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={ControlledAppTextInput}
          name="title"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={(props) => (
            <ControlledAppTextInput
              placeholder="enter your text"
              multiline
              inputStyle={{
                height: 128,
              }}
              {...props}
            />
          )}
          name="content"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton disabled={!isValid} onPress={handleSubmit(onSubmit)}>
          Save
        </AppButton>
        <AppButton variant="text" onPress={handleCancel}>
          Cancel
        </AppButton>
      </View>
      {isSubmitting && (
        <View style={styles.activityIndicator}>
          <AppActivityIndicator />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    position: "absolute",
    inset: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  textInputsContainer: {
    paddingTop: 24,
    gap: 8,
  },
  buttonsContainer: {
    paddingTop: 16,
    gap: 8,
  },
});
