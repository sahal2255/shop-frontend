import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CommonForm = ({ fromCotrols, formData, setFormData, onSubmit, buttonText }) => {
  function renderInputsBycomponentType(getControlItem) {
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        return (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({ ...formData, [getControlItem.name]: event.target.value })
            }
          />
        );

      case "select":
        return (
          <Select
            value={value}
            onValueChange={(selectedValue) =>
              setFormData({ ...formData, [getControlItem.name]: selectedValue })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.length > 0 &&
                getControlItem.options.map((optionItem) => (
                  <SelectItem key={optionItem.id} value={optionItem.id}>
                    {optionItem.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({ ...formData, [getControlItem.name]: event.target.value })
            }
          />
        );

      default:
        return (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({ ...formData, [getControlItem.name]: event.target.value })
            }
          />
        );
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {fromCotrols.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsBycomponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button className="mt-4 w-full" type="submit">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
