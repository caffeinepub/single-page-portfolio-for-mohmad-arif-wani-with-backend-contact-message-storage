import Time "mo:core/Time";
import List "mo:core/List";

actor {
  public type MessagePayload = {
    senderName : Text;
    senderEmail : Text;
    message : Text;
  };

  public type Submission = {
    timestamp : Time.Time;
    payload : MessagePayload;
  };

  let messages = List.empty<Submission>();

  public shared ({ caller }) func submitMessage(payload : MessagePayload) : async () {
    let submission : Submission = {
      timestamp = Time.now();
      payload;
    };
    messages.add(submission);
  };

  public query ({ caller }) func getAllMessages() : async [Submission] {
    messages.toArray();
  };
};
