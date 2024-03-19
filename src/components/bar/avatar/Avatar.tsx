import { Avatar, Stack } from "@suid/material";

export default function Avatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{
                    width: 56,
                    height: 56,
                }}
            />
        </Stack>
    );
}
