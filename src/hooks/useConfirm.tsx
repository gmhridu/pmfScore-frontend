import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShareModal } from "@/components/ShareModal";
import { Input } from "@/components/ui/input";
import { CopyIcon } from "lucide-react";

type VariantType = React.ComponentProps<typeof Button>;

export const useConfirm = (
  title?: string,
  message?: string,
  fullInviteLink?: string,
  handleCopyInviteLink?: () => void,
  variant: VariantType["variant"] = "default"
): [() => React.JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise<boolean>((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <ShareModal open={promise !== null} onOpenChange={handleClose}>
      <Card className="w-full h-full border-none shadow-none">
        <CardContent className="pt-8">
          <CardHeader className="p-0">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{message}</CardDescription>
          </CardHeader>
          <div className="flex items-center gap-x-2 pt-2">
            <Input disabled value={fullInviteLink} />
            <Button
              variant={"secondary"}
              size={"icon"}
              onClick={handleCopyInviteLink}
              className="cursor-pointer"
            >
              <CopyIcon />
            </Button>
          </div>
          <div className="pt-4 w-full flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
            <Button
              size={"sm"}
              variant={"outline"}
              onClick={handleCancel}
              className="w-full lg:w-auto cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              size={"sm"}
              variant={variant}
              onClick={handleConfirm}
              className="w-full lg:w-auto cursor-pointer"
            >
              Confirm
            </Button>
          </div>
        </CardContent>
      </Card>
    </ShareModal>
  );

  return [ConfirmationDialog, confirm];
};
