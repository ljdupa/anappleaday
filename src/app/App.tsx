import { useRef, useState } from "react";

import IPhone16Startscreen from "../imports/IPhone16Startscreen/IPhone16Startscreen";
import SignUpScreen from "./components/SignUpScreen";
import SignInScreen from "./components/SignInScreen";
import ChooseAppleScreen from "./components/ChooseAppleScreen";
import HomeScreen from "./components/HomeScreen";
import FriendsScreen from "./components/FriendsScreen";
import JournalScreen from "./components/JournalScreen";
import CreateEntryScreen from "./components/CreateEntryScreen";
import AddFriendsScreen from "./components/AddFriendsScreen";
import RemindersScreen from "./components/RemindersScreen";
import CheckUpScreen from "./components/CheckUpScreen";
import RemindScreen from "./components/RemindScreen";
import EncourageScreen from "./components/EncourageScreen";
import CustomScreen from "./components/CustomScreen";
import ProfileScreen from "./components/ProfileScreen";
import ReceivedApplesScreen from "./components/ReceivedApplesScreen";
import SentApplesScreen from "./components/SentApplesScreen";

import IPhone16Apple1 from "../imports/IPhone16Apple1/IPhone16Apple1";
import IPhone16Apple2 from "../imports/IPhone16Apple2/IPhone16Apple2";
import IPhone16Apple3 from "../imports/IPhone16Apple3/IPhone16Apple3";
import IPhone16Apple4 from "../imports/IPhone16Apple4/IPhone16Apple4";
import IPhone16Apple5 from "../imports/IPhone16Apple5/IPhone16Apple5";

type AppleType = "rotten" | "bad" | "okay" | "good" | "great";
type AppleNextScreen = "home" | "createEntry";

type ScreenType =
  | "start" | "signIn" | "signUp" | "chooseApple"
  | "rotten" | "bad" | "okay" | "good" | "great"
  | "home" | "emptyfriends" | "journal" | "createEntry"
  | "addFriends" | "reminders"
  | "checkUp" | "remind" | "encourage" | "custom" | "profile"
  | "receivedApples" | "sentApples";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
}

function AppleScreen({
  mood,
  onSetMood,
  onSelectApple,
}: {
  mood: AppleType;
  onSetMood: () => void;
  onSelectApple: (apple: AppleType) => void;
}) {
  return (
    <div className="relative w-full h-full">
      {mood === "rotten" && <IPhone16Apple5 onSetMood={onSetMood} />}
      {mood === "bad" && <IPhone16Apple4 onSetMood={onSetMood} />}
      {mood === "okay" && <IPhone16Apple3 onSetMood={onSetMood} />}
      {mood === "good" && <IPhone16Apple2 onSetMood={onSetMood} />}
      {mood === "great" && <IPhone16Apple1 onSetMood={onSetMood} />}
      <button type="button" onClick={() => onSelectApple("rotten")} className="absolute left-[35px] top-[600px] w-[70px] h-[90px] z-[9999] bg-transparent border-0 p-0" />
      <button type="button" onClick={() => onSelectApple("bad")} className="absolute left-[105px] top-[615px] w-[70px] h-[90px] z-[9999] bg-transparent border-0 p-0" />
      <button type="button" onClick={() => onSelectApple("okay")} className="absolute left-[170px] top-[630px] w-[70px] h-[90px] z-[9999] bg-transparent border-0 p-0" />
      <button type="button" onClick={() => onSelectApple("good")} className="absolute left-[235px] top-[615px] w-[70px] h-[90px] z-[9999] bg-transparent border-0 p-0" />
      <button type="button" onClick={() => onSelectApple("great")} className="absolute left-[295px] top-[600px] w-[70px] h-[90px] z-[9999] bg-transparent border-0 p-0" />
    </div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("start");
  const [selectedMood, setSelectedMood] = useState<AppleType>("great");
  const [userName, setUserName] = useState("Lauren");
  const appleNextScreenRef = useRef<AppleNextScreen>("home");
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [selectedFriendsForReminder, setSelectedFriendsForReminder] = useState<string[]>([]);
  const [receivedApples] = useState<Array<{ color: string; from: string; date: string }>>([]);

  const handleSignIn = () => setCurrentScreen("signIn");

  const handleSelectApple = (apple: AppleType) => {
    setSelectedMood(apple);
    setCurrentScreen(apple);
  };

  const handleSaveEntry = (title: string, content: string, mood: string) => {
    const now = new Date();
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      title: title || "Untitled",
      content,
      date: now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      mood,
    };
    setJournalEntries([newEntry, ...journalEntries]);
    setCurrentScreen("journal");
  };

  const handleSendReminder = (reminder: string) => {
    console.log("Sending reminder:", reminder, "to friends:", selectedFriendsForReminder);
    setCurrentScreen("emptyfriends");
  };

  const navToLogMood = () => {
    appleNextScreenRef.current = "createEntry";
    setCurrentScreen(selectedMood);
  };

  const sharedNav = {
    onNavigateToHome: () => setCurrentScreen("home"),
    onNavigateToJournal: () => setCurrentScreen("journal"),
    onNavigateToLogMood: navToLogMood,
    onNavigateToFriends: () => setCurrentScreen("emptyfriends"),
    onNavigateToProfile: () => setCurrentScreen("profile"),
  };

  const handleAppleSetMood = () => setCurrentScreen(appleNextScreenRef.current);

  return (
    <div className="size-full flex items-center justify-center bg-gray-900">
      <div className="w-[393px] h-[852px] relative overflow-hidden shadow-2xl rounded-[40px]">

        {currentScreen === "start" && (
          <IPhone16Startscreen onSignIn={handleSignIn} onSignUp={() => setCurrentScreen("signUp")} />
        )}

        {currentScreen === "signUp" && (
          <SignUpScreen
            onCreateAccount={(name) => {
              if (name) setUserName(name);
              setCurrentScreen("chooseApple");
            }}
            onSignIn={() => setCurrentScreen("signIn")}
          />
        )}

        {currentScreen === "signIn" && (
          <SignInScreen
            onSignIn={(email) => {
              if (email) setUserName(email.split("@")[0]);
              setCurrentScreen("chooseApple");
            }}
            onSignUp={() => setCurrentScreen("signUp")}
          />
        )}

        {currentScreen === "chooseApple" && (
          <ChooseAppleScreen onSelectApple={handleSelectApple} />
        )}

        {currentScreen === "rotten" && (
          <AppleScreen mood="rotten" onSetMood={handleAppleSetMood} onSelectApple={handleSelectApple} />
        )}
        {currentScreen === "bad" && (
          <AppleScreen mood="bad" onSetMood={handleAppleSetMood} onSelectApple={handleSelectApple} />
        )}
        {currentScreen === "okay" && (
          <AppleScreen mood="okay" onSetMood={handleAppleSetMood} onSelectApple={handleSelectApple} />
        )}
        {currentScreen === "good" && (
          <AppleScreen mood="good" onSetMood={handleAppleSetMood} onSelectApple={handleSelectApple} />
        )}
        {currentScreen === "great" && (
          <AppleScreen mood="great" onSetMood={handleAppleSetMood} onSelectApple={handleSelectApple} />
        )}

        {currentScreen === "home" && (
          <HomeScreen
            userName={userName}
            onNavigateToHome={() => setCurrentScreen("home")}
            onNavigateToFriends={() => setCurrentScreen("emptyfriends")}
            onNavigateToJournal={() => setCurrentScreen("journal")}
            onNavigateToLogMood={navToLogMood}
            onNavigateToProfile={() => setCurrentScreen("profile")}
            onNavigateToReceivedApples={() => setCurrentScreen("receivedApples")}
            onNavigateToSentApples={() => setCurrentScreen("sentApples")}
            receivedApples={receivedApples}
          />
        )}

        {currentScreen === "profile" && (
          <ProfileScreen
            userName={userName}
            entries={journalEntries}
            onNavigateToHome={() => setCurrentScreen("home")}
            onNavigateToFriends={() => setCurrentScreen("emptyfriends")}
            onNavigateToJournal={() => setCurrentScreen("journal")}
            onNavigateToLogMood={navToLogMood}
            onNavigateToProfile={() => setCurrentScreen("profile")}
          />
        )}

        {currentScreen === "emptyfriends" && (
          <FriendsScreen
            onNavigateToHome={() => setCurrentScreen("home")}
            onNavigateToJournal={() => setCurrentScreen("journal")}
            onNavigateToLogMood={navToLogMood}
            onNavigateToAddFriends={() => setCurrentScreen("addFriends")}
            onNavigateToReminders={(friends) => {
              setSelectedFriendsForReminder(friends);
              setCurrentScreen("reminders");
            }}
            onNavigateToProfile={() => setCurrentScreen("profile")}
          />
        )}

        {currentScreen === "addFriends" && (
          <AddFriendsScreen
            onContinue={(friends) => {
              setSelectedFriendsForReminder(friends);
              setCurrentScreen("reminders");
            }}
            onBack={() => setCurrentScreen("emptyfriends")}
            {...sharedNav}
          />
        )}

        {currentScreen === "reminders" && (
          <RemindersScreen
            onSend={handleSendReminder}
            onBack={() => setCurrentScreen("emptyfriends")}
            selectedFriends={selectedFriendsForReminder}
            onNavigateToCheckUp={() => setCurrentScreen("checkUp")}
            onNavigateToRemind={() => setCurrentScreen("remind")}
            onNavigateToEncourage={() => setCurrentScreen("encourage")}
            onNavigateToCustom={() => setCurrentScreen("custom")}
            {...sharedNav}
          />
        )}

        {currentScreen === "checkUp" && (
          <CheckUpScreen
            onBack={() => setCurrentScreen("reminders")}
            onSend={() => setCurrentScreen("home")}
            {...sharedNav}
          />
        )}

        {currentScreen === "remind" && (
          <RemindScreen
            onBack={() => setCurrentScreen("reminders")}
            onSend={() => setCurrentScreen("home")}
            {...sharedNav}
          />
        )}

        {currentScreen === "encourage" && (
          <EncourageScreen
            onBack={() => setCurrentScreen("reminders")}
            onSend={() => setCurrentScreen("home")}
            {...sharedNav}
          />
        )}

        {currentScreen === "custom" && (
          <CustomScreen
            onBack={() => setCurrentScreen("reminders")}
            onSend={() => setCurrentScreen("home")}
            {...sharedNav}
          />
        )}

        {currentScreen === "journal" && (
          <JournalScreen
            onNavigateToHome={() => setCurrentScreen("home")}
            onNavigateToFriends={() => setCurrentScreen("emptyfriends")}
            onNavigateToLogMood={navToLogMood}
            onNavigateToProfile={() => setCurrentScreen("profile")}
            onCreateEntry={() => {
              appleNextScreenRef.current = "createEntry";
              setCurrentScreen(selectedMood);
            }}
            entries={journalEntries}
            onEditEntry={(id, title, content, mood) => {
              setJournalEntries(prev =>
                prev.map(e => e.id === id ? { ...e, title, content, mood } : e)
              );
            }}
          />
        )}

        {currentScreen === "createEntry" && (
          <CreateEntryScreen
            onSave={handleSaveEntry}
            onCancel={() => setCurrentScreen("home")}
            selectedMood={selectedMood}
            onChangeMood={(mood: string) => setSelectedMood(mood as AppleType)}
          />
        )}

        {currentScreen === "receivedApples" && (
          <ReceivedApplesScreen
            onNavigateToHome={() => setCurrentScreen("home")}
            onNavigateToFriends={() => setCurrentScreen("emptyfriends")}
            onNavigateToJournal={() => setCurrentScreen("journal")}
            onNavigateToLogMood={navToLogMood}
            onNavigateToProfile={() => setCurrentScreen("profile")}
            onNavigateToSentApples={() => setCurrentScreen("sentApples")}
          />
        )}

        {currentScreen === "sentApples" && (
          <SentApplesScreen
            onNavigateToHome={() => setCurrentScreen("home")}
            onNavigateToFriends={() => setCurrentScreen("emptyfriends")}
            onNavigateToJournal={() => setCurrentScreen("journal")}
            onNavigateToLogMood={navToLogMood}
            onNavigateToProfile={() => setCurrentScreen("profile")}
            onNavigateToReceivedApples={() => setCurrentScreen("receivedApples")}
          />
        )}

      </div>
    </div>
  );
}