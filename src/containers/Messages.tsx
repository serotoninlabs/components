import styled from "styled-components";

export const Message = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.notifications.default.main};
  border-left: 2px solid
    ${(props) => props.theme.colors.notifications.default.border};
  color: ${(props) => props.theme.colors.notifications.default.text};
`;

export const Info = styled(Message)`
  background-color: ${(props) => props.theme.colors.notifications.info.main};
  border-left: 2px solid
    ${(props) => props.theme.colors.notifications.info.border};
  color: ${(props) => props.theme.colors.notifications.info.text};
`;

export const Warning = styled(Message)`
  background-color: ${(props) => props.theme.colors.notifications.warning.main};
  border-left: 2px solid
    ${(props) => props.theme.colors.notifications.warning.border};
  color: ${(props) => props.theme.colors.notifications.warning.text};
`;
