import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/contact";

module {
  public type ContactSubmission = Types.ContactSubmission;

  public func submit(
    submissions : List.List<ContactSubmission>,
    name : Text,
    phone : Text,
    email : Text,
    requirement : Text,
    message : Text,
    timestamp : Int,
  ) : ContactSubmission {
    Debug.todo();
  };

  public func getAll(submissions : List.List<ContactSubmission>) : [ContactSubmission] {
    Debug.todo();
  };

  public func count(submissions : List.List<ContactSubmission>) : Nat {
    Debug.todo();
  };
};
