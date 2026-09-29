import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit2,
  Save,
  LoaderCircle,
  AlertCircle,
  CheckCircle2,
  X,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import { editUser, changePassword } from "../../slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [actionFeedback, setActionFeedback] = useState({
    type: "",
    message: "",
  });

  const dispatch = useDispatch();
  const { loading, error, passwordLoading, passwordError } = useSelector(
    (state) => state.users,
  );

  const SavedUser = JSON.parse(localStorage.getItem("user"));
  const userId = SavedUser?._id || SavedUser?.id;
  const { name, email, createdAt, phone, address } = SavedUser || {};
  const isoString = createdAt || new Date().toISOString();

  const feedbackMessage = error
    ? `${error.message} OR session expired. Please login again.`
    : actionFeedback.message;

  const feedbackType = error ? "error" : actionFeedback.type;

  const formattedDate = new Date(isoString).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const [FirstName, LastName] = name ? name.split(" ") : ["Admin", "User"];

  const [profile, setProfile] = useState({
    name: name || `${FirstName} ${LastName}`,
    email: email || "Admin Email",
    joinDate: formattedDate || "Join Date",
    role: "Super Admin",
    phone: phone || "N/A",
    address: address || "N/A",
  });

  const [formData, setFormData] = useState(profile);
  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordFormError, setPasswordFormError] = useState("");
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdit = () => {
    setIsEditing(true);
    setFormData(profile);
  };

  const handleSave = async () => {
    const { name, email, phone, address } = formData;
    try {
      const updatedUser = await dispatch(
        editUser({
          userId,
          userData: { name, email, phone, address },
        }),
      ).unwrap();
      setProfile((currentProfile) => ({
        ...currentProfile,
        ...updatedUser,
      }));
      setIsEditing(false);
      setActionFeedback({
        type: "success",
        message: "Profile updated successfully!",
      });
      setTimeout(() => {
        setActionFeedback({ type: "", message: "" });
      }, 5000);
    } catch (error) {
      setActionFeedback({
        type: "error",
        message: error.message || "Failed to update profile. Please try again.",
      });
      setTimeout(() => {
        setActionFeedback({ type: "", message: "" });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    setPasswordFormError("");
    setPasswordSuccessMsg("");
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordFormError("");
    setPasswordSuccessMsg("");

    const { currentPassword, newPassword, confirmPassword } = passwordForm;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordFormError("Please fill in all fields.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordFormError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordFormError("New passwords do not match.");
      return;
    }

    try {
      await dispatch(
        changePassword({ userId, currentPassword, newPassword }),
      ).unwrap();
      setPasswordSuccessMsg("Password updated successfully.");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch {
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-heading font-bold text-footer mb-2">
          Admin Profile
        </h1>
        <p className="text-footer/60">Manage your account information</p>
      </div>

      {feedbackMessage && (
        <div
          role="alert"
          className={`flex items-start justify-between gap-4 rounded-lg border px-4 py-3 text-sm ${
            feedbackType === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-green-200 bg-green-50 text-green-700"
          }`}
        >
          <div className="flex items-center gap-2">
            {feedbackType === "error" ? (
              <AlertCircle className="h-5 w-5 shrink-0" />
            ) : (
              <CheckCircle2 className="h-5 w-5 shrink-0" />
            )}
            <span>{feedbackMessage}</span>
          </div>
          <button
            type="button"
            aria-label="Dismiss message"
            onClick={() => setActionFeedback({ type: "", message: "" })}
            className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-primary border border-footer/10 rounded-xl overflow-hidden">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-accent to-accent/70" />

        {/* Profile Content */}
        <div className="px-8 pb-8">
          {/* Avatar and Name */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-8">
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 bg-accent rounded-full border-4 border-primary flex items-center justify-center text-white text-3xl">
                <User className="w-12 h-12" />
              </div>
              <div className="mb-2">
                <h2 className="text-3xl font-heading font-bold text-footer">
                  {isEditing ? formData.name : profile.name}
                </h2>
                <p className="text-footer/60">{profile.role}</p>
              </div>
            </div>
            <div>
              {isEditing ? (
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  {loading ? (
                    <LoaderCircle className="w-5 h-5 animate-spin" />
                  ) : (
                    <Save className="w-5 h-5" />
                  )}
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-6 py-3 bg-hero text-footer rounded-lg hover:bg-footer/5 transition-colors font-medium border border-footer/10"
                >
                  <Edit2 className="w-5 h-5" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Info Sections */}
          {!isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-heading font-bold text-footer mb-6">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-footer/60">Email</p>
                      <p className="text-footer font-medium">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-footer/60">Phone</p>
                      <p className="text-footer font-medium">{profile.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-footer/60">Address</p>
                      <p className="text-footer font-medium">
                        {profile.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div>
                <h3 className="text-lg font-heading font-bold text-footer mb-6">
                  Account Information
                </h3>
                <div className="space-y-4">
                  <div className="bg-hero p-4 rounded-lg">
                    <p className="text-sm text-footer/60 mb-1">Join Date</p>
                    <p className="text-footer font-medium">
                      {profile.joinDate}
                    </p>
                  </div>
                  <div className="bg-hero p-4 rounded-lg">
                    <p className="text-sm text-footer/60 mb-1">Role</p>
                    <p className="text-footer font-medium">{profile.role}</p>
                  </div>
                  <div className="bg-hero p-4 rounded-lg">
                    <p className="text-sm text-footer/60 mb-1">Status</p>
                    <p className="text-footer font-medium text-green-600">
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-footer mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-footer mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-footer mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-footer mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-accent text-primary rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-6 py-3 bg-hero text-footer rounded-lg hover:bg-footer/5 transition-colors font-medium border border-footer/10"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Security Settings & Change Password */}
      <div className="bg-primary border border-footer/10 rounded-xl p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-footer">
            Security Settings
          </h3>
          <p className="text-sm text-footer/60">
            Manage your password and security credentials.
          </p>
        </div>

        {passwordError && (
          <div
            role="alert"
            className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>{passwordError}</p>
          </div>
        )}
        {passwordFormError && (
          <div
            role="alert"
            className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>{passwordFormError}</p>
          </div>
        )}
        {passwordSuccessMsg && (
          <div
            role="status"
            className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700 text-sm"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <p>{passwordSuccessMsg}</p>
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-5 max-w-md">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-footer/60 mb-2">
              Current Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
              autoComplete="current-password"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-footer/60 mb-2">
              New Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
              autoComplete="new-password"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-footer/60 mb-2">
              Confirm New Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              name="confirmPassword"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 bg-hero border border-footer/10 rounded-lg text-footer focus:outline-none focus:ring-2 focus:ring-accent"
              autoComplete="new-password"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowPasswords((s) => !s)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-footer/60 hover:text-footer transition-colors"
          >
            {showPasswords ? (
              <EyeOff className="w-3.5 h-3.5" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
            {showPasswords ? "Hide" : "Show"} Passwords
          </button>

          <button
            type="submit"
            disabled={passwordLoading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg text-xs font-bold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {passwordLoading ? (
              <LoaderCircle className="w-4 h-4 animate-spin" />
            ) : (
              <Lock className="w-4 h-4" />
            )}
            {passwordLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
