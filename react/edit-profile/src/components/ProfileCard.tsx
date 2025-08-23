'use client';

import React, { useState } from 'react';
import { generateInitials, defaultProfile } from '@/utils';
import { Profile } from '@/types';

const ProfileCard = () => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const initials = generateInitials(profile.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const updatedProfile: Profile = {
      name: formData.get('name') as string,
      location: formData.get('location') as string,
      email: formData.get('email') as string,
      bio: formData.get('bio') as string,
    };

    if (!updatedProfile.name || !updatedProfile.email) {
      alert('Name and Email are required!');
      return;
    }

    setProfile(updatedProfile);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 text-sm">
          Profile updated successfully
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-20 relative">
        <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-30 h-30 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
          {initials}
        </div>
      </div>

      <div className="pt-16 px-6 pb-6">
        {!isEditing ? (
          // View Mode
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h1>
            <div className="text-gray-600 text-sm mb-2">{profile.location || 'Location not specified'}</div>
            <div className="text-blue-600 text-sm mb-4">{profile.email}</div>
            <div className="text-gray-900 text-sm leading-relaxed mb-6 text-left bg-gray-50 p-3 rounded">
              {profile.bio || 'No bio provided'}
            </div>
            <button
              onClick={handleEdit}
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          // Edit Mode
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                defaultValue={profile.name}
                required
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={profile.location}
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                defaultValue={profile.email}
                required
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Bio</label>
              <textarea
                name="bio"
                defaultValue={profile.bio}
                placeholder="Tell us about yourself..."
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600 resize-y min-h-20"
              />
            </div>

            <div className="flex gap-2 justify-center pt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;