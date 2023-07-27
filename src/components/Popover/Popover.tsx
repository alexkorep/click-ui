import * as RadixPopover from "@radix-ui/react-popover";
import { Arrow, GenericMenuPanel } from "../GenericMenu";
import styled from "styled-components";
import { ReactNode } from "react";
import { Icon } from "..";
import { EmptyButton } from "../FormField/commonElement";
import PopoverArrow from "../icons/PopoverArrow";

export const Popover = ({ children, ...props }: RadixPopover.PopoverProps) => {
  return <RadixPopover.Root {...props}>{children}</RadixPopover.Root>;
};

const Trigger = styled(RadixPopover.Trigger)`
  width: fit-content;
  background: transparent;
  border: none;
`;

interface TriggerProps extends RadixPopover.PopoverTriggerProps {
  anchor?: ReactNode;
}

const PopoverTrigger = ({ children, anchor, ...props }: TriggerProps) => {
  return (
    <>
      <Trigger {...props}>{children}</Trigger>
      {anchor && <RadixPopover.Anchor asChild>{anchor}</RadixPopover.Anchor>}
    </>
  );
};
PopoverTrigger.displayName = "PopoverTrigger";
Popover.Trigger = PopoverTrigger;

interface PopoverContentProps extends RadixPopover.PopoverContentProps {
  showArrow?: boolean;
  showClose?: boolean;
  forceMount?: true;
  container?: HTMLElement | null;
}

const MenuPanel = styled(GenericMenuPanel)<{ showClose?: boolean; showArrow?: boolean }>`
  display: block;
  padding: ${({ theme }) => theme.click.popover.space.y} ${({ theme }) => theme.click.popover.space.y};
  background-color: ${({ theme }) => theme.click.popover.color.panel.background}
  border: 1px solid ${({ theme }) => theme.click.popover.color.panel.stroke}
  border-radius: ${({ theme }) => theme.click.popover.radii.all}

  ${({ showClose }) =>
    showClose
      ? `
    padding-top: 1rem;
  `
      : ""};
  ${({ showArrow }) =>
    showArrow
      ? `
    margin: -1px 0;
  `
      : ""};
`;

const CloseButton = styled(EmptyButton)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const PopoverContent = ({
  children,
  showArrow,
  showClose,
  forceMount,
  container,
  ...props
}: PopoverContentProps) => {
  return (
    <RadixPopover.Portal
      forceMount={forceMount}
      container={container}
    >
      <MenuPanel
        as={RadixPopover.Content}
        type="popover"
        showClose={showClose}
        showArrow={showArrow}
        {...props}
      >
        {showClose && (
          <CloseButton
            as={RadixPopover.Close}
            asChild
          >
            <Icon name="cross" />
          </CloseButton>
        )}
        {showArrow && (
          <Arrow
            asChild
            as={RadixPopover.Arrow}
            width={20}
            height={10}
          >
            <PopoverArrow />
          </Arrow>
        )}
        {children}
      </MenuPanel>
    </RadixPopover.Portal>
  );
};
PopoverContent.displayName = "PopoverContent";
Popover.Content = PopoverContent;