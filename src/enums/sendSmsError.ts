export enum SendSmsError {
    None = "none",
    Unknown = "unknown",
    Expired = "expired",
    Forbidden = "forbidden",
    Unreachable = "unreachable",
    UnknownStatus = "unknown_status",
    UnableToDeliver = "unable_to_deliver",
    InvalidPhoneNumber = "invalid_phone_number",
    Rejected = "rejected",
}